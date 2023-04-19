1. 安装`go`插件
2. 安装插件提供的工具
   * `ctrl+shift+p`,  选择  `Go: Install/Update tools`，勾选全部工具进行安装
   * 额外安装`gopls`工具，`Go modules`需要
3. 设置
   * `settings.json`增加一行`"go.formatTool": "goimports"`，也是`Go modules`的影响
   * 增加一行`"go.lintFlags": ["--disable=all", "--enable=errcheck"],`代码规范检查