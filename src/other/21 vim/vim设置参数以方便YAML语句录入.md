>  转载链接：https://my.oschina.net/u/589241/blog/2223430

Ansible的剧本等文件都采用YAML一样的对齐方式，一般同等级别的代码行会对齐，直接的下级，则会后退两个空格。退错一个空格就会出错！有时，正在编辑的这一行前面了6格，紧接着要输入下一行。一回车，光标跑到下一行最前面，要连续输入6个空格，岂不是很痛苦？要是一回车，能学上一行的样儿，直接空出6格，多好！

还好，我们只要为vim软件设置一下环境，就可以实现上面那个便利。甚至，能将一个tab变成两个真正的空格。记住，要是你没有设置，tab是tab，空格是空格，是完全不一样的存在。

空格的ASCII编码是0，Tab键的ASCII编码是9。好吧，你就按照下面这个方法处理一下，再去试一试吧。

```
# cat ~/.vimrc
autocmd FileType yaml setlocal ai ts=2 sw=2 et
# source ~/.vimrc
```

autocmd FileType yaml setlocal ts=2 sw=2 et则相当于下面这样的参数：

ai = auto indent，自动退格对齐

set tabstop=2（ts=tabstop，即一个tab的宽度被设为2个空格辣么宽）
set shiftwidth=2（sw=shiftwidth，即退格对齐以2个空格为准）
set expandtab（et=expandtab，将tab变成空格）