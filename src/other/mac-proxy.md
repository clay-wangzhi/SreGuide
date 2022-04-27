---
tag:
  - Mac
---

# macOS配置终端走socks5代理

> 转载自：[macOS配置终端走socks5代理](https://zhuanlan.zhihu.com/p/269878724)

在`~/.bash_profile` 中添加如下内容（如果是是zsh用户那么配置文件为~/.zshrc）：

```bash
# 为终端设置代理
alias proxy='export all_proxy=socks5://127.0.0.1:1080'
alias unproxy='unset all_proxy'
```

修改完成之后需要使用`source ~/.bash_profile`

其中，1080为端口号，需要和自己的代理软件的设置保持一致。

这样在终端中使用proxy命令就可以打开代理，使用unproxy就可以关闭代理。