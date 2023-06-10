import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as e,e as r}from"./app-1a5afd71.js";const o={},l=r("<table><thead><tr><th>退出代码</th><th>表意</th><th>示例</th><th>注释</th></tr></thead><tbody><tr><td>1</td><td>通用错误</td><td>let &quot;var1 = 1/0&quot;</td><td>其他错误，如除以零错误及其他无权限操作。</td></tr><tr><td>2</td><td>(据 Bash 文档) 误用 Shell builtins</td><td>empty_function() {}</td><td>缺失关键词或指令，或权限问题 (及 diff 在二进制文件比较时的返回值)</td></tr><tr><td>126</td><td>调用的指令无法执行</td><td>/dev/null</td><td>权限问题或命令不可执行</td></tr><tr><td>127</td><td>「未找到指令」</td><td>illegal_command</td><td>可能是 $PATH 有问题或输入有误。</td></tr><tr><td>128</td><td>exit 的参数有误</td><td>exit 3.14159</td><td>exit 只接受范围在 0 - 255 的整数 (见第一个脚注)</td></tr><tr><td>128+n</td><td>错误信号 “n”</td><td>脚本的 kill -9 $PPID</td><td>$? 返回 137 (128 + 9)</td></tr><tr><td>130</td><td>脚本被 Control-C 终止</td><td>Ctl-C</td><td>Control-C 是错误信号 2 (130 = 128 + 2, 见上)</td></tr><tr><td>255*</td><td>错误状态超范围</td><td>exit -1</td><td>exit 只接受范围在 0 - 255 的整数</td></tr></tbody></table><p>根据上表，退出代码 1 - 2，126 - 165 及 255 有特别含义，并因此应避免用于用户定义的退出代码。以 <em>exit 127</em> 结束代码一定会在调试时导致混乱 (这是「命令未找到」的错误代码还是用户定义的？)。然而，许多脚本把 <em>exit 1</em> 当作出错通用退出指令。因为退出代码 1 表示许多可能的错误，这对调试不是很有用。</p><p>对此曾有过系统化退出代码的尝试 (见 <code>/usr/include/sysexits.h</code>)，但这是为了 C/C++ 程序员的。脚本中类似的标准可能比较恰当。文档作者提议限制用户定义的错误代码为 64 - 113 (包括表示成功的 0)，以符合 C/C++ 标准。这会分配 50 个可用代码，也会使脚本排错更直观。本文档中所有脚本示例符合这个标准，除了需要违反这一点的情况，如 例 9-2。</p><p>{% hint style=&quot;info&quot; %} 只有在 Bash 或 <em>sh</em> 提示符中，Shell 脚本退出后在命令行执行 $? 才会给出与上表一致的结果，运行 <em>C-shell</em> 或 <em>tcsh</em> 有时会给出不同的结果。 {% endhint %}</p>",4),i=[l];function s(c,n){return d(),e("div",null,i)}const _=t(o,[["render",s],["__file","E_special_exitcodes.html.vue"]]);export{_ as default};
