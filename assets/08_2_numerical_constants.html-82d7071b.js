import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,e as s}from"./app-b1cf59f4.js";const l={},d=s(`<h1 id="_8-2-数字常量" tabindex="-1"><a class="header-anchor" href="#_8-2-数字常量" aria-hidden="true">#</a> 8.2 数字常量</h1><p>通常情况下，shell脚本会把数字以十进制整数看待(base 10)，除非数字加了特殊的前缀或标记。 带前缀0的数字是八进制数(base 8)；带前缀0x的数字是十六进制数(base 16)。 内嵌 # 的数字会以 BASE#NUMBER 的方式进行求值（不能超出当前shell支持整数的范围）。</p><p><strong>样例 8-4. 数字常量的表示</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# numbers.sh: 不同进制数的表示

# 十进制数: 默认
let &quot;dec = 32&quot;
echo &quot;decimal number = $dec&quot;             # 32
# 一切正常。


# 八进制数: 带前导&#39;0&#39;的数
let &quot;oct = 032&quot;
echo &quot;octal number = $oct&quot;               # 26
# 结果以 十进制 打印输出了。
# ------ ------ -----------


# 十六进制数: 带前导&#39;0x&#39;或&#39;0X&#39;的数
let &quot;hex = 0x32&quot;
echo &quot;hexadecimal number = $hex&quot;         # 50

echo $((0x9abc))                         # 39612
#     ^^      ^^   双圆括号进行表达式求值
# 结果以十进制打印输出。



# 其他进制数: BASE#NUMBER
# BASE 范围:  2 - 64
# NUMBER 必须以 BASE 规定的正确形式书写，如下:

let &quot;bin = 2#111100111001101&quot;
echo &quot;binary number = $bin&quot;              # 31181

let &quot;b32 = 32#77&quot;
echo &quot;base-32 number = $b32&quot;             # 231

let &quot;b64 = 64#@_&quot;
echo &quot;base-64 number = $b64&quot;             # 4031

# 这种表示法只对进制范围(2 - 64)内的 ASCII 字符有效。
# 10 数字 + 26 小写字母 + 26 大写字母 + @ + _


echo

echo $((36#zz)) $((2#10101010)) $((16#AF16)) $((53#1aA))
                                         # 1295 170 44822 3375

#  重要提醒:
#  ---------
#  使用超出进制范围以外的符号会报错。

let &quot;bad_oct = 081&quot;

# (可能的) 报错信息:
#  bad_oct = 081: value too great for base (error token is &quot;081&quot;)
#              Octal numbers use only digits in the range 0 - 7.

exit $?        # 退出码 = 1 (错误)

# 感谢 Rich Bartell 和 Stephane Chazelas 的说明。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=[d];function a(u,c){return e(),i("div",null,v)}const t=n(l,[["render",a],["__file","08_2_numerical_constants.html.vue"]]);export{t as default};
