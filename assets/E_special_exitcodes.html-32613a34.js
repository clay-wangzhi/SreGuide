const t=JSON.parse('{"key":"v-dd604362","path":"/code/shell/appendix/E_special_exitcodes.html","title":"","lang":"zh-CN","frontmatter":{"author":"LinuxStory","category":"Linux","tag":["Bash"],"description":"退出代码 表意 示例 注释 1 通用错误 let \\"var1 = 1/0\\" 其他错误，如除以零错误及其他无权限操作。 2 (据 Bash 文档) 误用 Shell builtins empty_function() {} 缺失关键词或指令，或权限问题 (及 diff 在二进制文件比较时的返回值) 126 调用的指令无法执行 /dev/null 权限问题或命令不可执行 127 「未找到指令」 illegal_command 可能是 $PATH 有问题或输入有误。 128 exit 的参数有误 exit 3.14159 exit 只接受范围在 0 - 255 的整数 (见第一个脚注) 128+n 错误信号 “n” 脚本的 kill -9 $PPID $? 返回 137 (128 + 9) 130 脚本被 Control-C 终止 Ctl-C Control-C 是错误信号 2 (130 = 128 + 2, 见上) 255* 错误状态超范围 exit -1 exit 只接受范围在 0 - 255 的整数","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/code/shell/appendix/E_special_exitcodes.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:description","content":"退出代码 表意 示例 注释 1 通用错误 let \\"var1 = 1/0\\" 其他错误，如除以零错误及其他无权限操作。 2 (据 Bash 文档) 误用 Shell builtins empty_function() {} 缺失关键词或指令，或权限问题 (及 diff 在二进制文件比较时的返回值) 126 调用的指令无法执行 /dev/null 权限问题或命令不可执行 127 「未找到指令」 illegal_command 可能是 $PATH 有问题或输入有误。 128 exit 的参数有误 exit 3.14159 exit 只接受范围在 0 - 255 的整数 (见第一个脚注) 128+n 错误信号 “n” 脚本的 kill -9 $PPID $? 返回 137 (128 + 9) 130 脚本被 Control-C 终止 Ctl-C Control-C 是错误信号 2 (130 = 128 + 2, 见上) 255* 错误状态超范围 exit -1 exit 只接受范围在 0 - 255 的整数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-19T13:08:31.000Z"}],["meta",{"property":"article:author","content":"LinuxStory"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:modified_time","content":"2023-04-19T13:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-19T13:08:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LinuxStory\\"}]}"]]},"headers":[],"git":{"createdTime":1681909711000,"updatedTime":1681909711000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":1.7,"words":509},"filePathRelative":"code/shell/appendix/E_special_exitcodes.md","localizedDate":"2023年4月19日","excerpt":"<table>\\n<thead>\\n<tr>\\n<th>退出代码</th>\\n<th>表意</th>\\n<th>示例</th>\\n<th>注释</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1</td>\\n<td>通用错误</td>\\n<td>let \\"var1 = 1/0\\"</td>\\n<td>其他错误，如除以零错误及其他无权限操作。</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>(据 Bash 文档) 误用 Shell builtins</td>\\n<td>empty_function() {}</td>\\n<td>缺失关键词或指令，或权限问题 (及 diff 在二进制文件比较时的返回值)</td>\\n</tr>\\n<tr>\\n<td>126</td>\\n<td>调用的指令无法执行</td>\\n<td>/dev/null</td>\\n<td>权限问题或命令不可执行</td>\\n</tr>\\n<tr>\\n<td>127</td>\\n<td>「未找到指令」</td>\\n<td>illegal_command</td>\\n<td>可能是 $PATH 有问题或输入有误。</td>\\n</tr>\\n<tr>\\n<td>128</td>\\n<td>exit 的参数有误</td>\\n<td>exit 3.14159</td>\\n<td>exit 只接受范围在 0 - 255 的整数 (见第一个脚注)</td>\\n</tr>\\n<tr>\\n<td>128+n</td>\\n<td>错误信号 “n”</td>\\n<td>脚本的 kill -9 $PPID</td>\\n<td>$? 返回 137 (128 + 9)</td>\\n</tr>\\n<tr>\\n<td>130</td>\\n<td>脚本被 Control-C 终止</td>\\n<td>Ctl-C</td>\\n<td>Control-C 是错误信号 2 (130 = 128 + 2, 见上)</td>\\n</tr>\\n<tr>\\n<td>255*</td>\\n<td>错误状态超范围</td>\\n<td>exit -1</td>\\n<td>exit 只接受范围在 0 - 255 的整数</td>\\n</tr>\\n</tbody>\\n</table>","copyright":{"author":"LinuxStory"},"autoDesc":true}');export{t as data};
