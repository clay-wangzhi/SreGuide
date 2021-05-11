(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1075:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_36-3-测试和比较的其他方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_36-3-测试和比较的其他方法"}},[s._v("#")]),s._v(" 36.3 测试和比较的其他方法")]),s._v(" "),n("p",[s._v("对于判断（test命令）来说，[[ ]]比[ ]更加合适。同样的，算数运算符（译注：-eq之类的）比(( ))更有优势。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('a=8\n\n# 下面所有这些比较的结果都应该是相等的\ntest "$a" -lt 16 && echo "yes, $a < 16"         # "and list"\n/bin/test "$a" -lt 16 && echo "yes, $a < 16" \n[ "$a" -lt 16 ] && echo "yes, $a < 16" \n[[ $a -lt 16 ]] && echo "yes, $a < 16"          # 为表达式添加\n(( a < 16 )) && echo "yes, $a < 16"             # [[ ]]和(( ))并不是必须的\n\ncity="New York"\n# 下面这些结果也是相等的\ntest "$city" \\< Paris && echo "Yes, Paris is greater than $city"\n                                  # ASCII字符比较\n/bin/test "$city" \\< Paris && echo "Yes, Paris is greater than $city" \n[ "$city" \\< Paris ] && echo "Yes, Paris is greater than $city" \n[[ $city < Paris ]] && echo "Yes, Paris is greater than $city"\n                                  # 并不需要为$city变量加引号。\n\n# 向S.C.致谢\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);