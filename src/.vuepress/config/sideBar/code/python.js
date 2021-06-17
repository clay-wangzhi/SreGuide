module.exports = [
  "",
  {
    title: "1 Python 简介",
    collapsable: false,
    children: ["first", "codeSpecification", "python-virtualenv", "python-pip"]
  },
  {
    title: "2 Python 基础",
    collapsable: false,
    children: ["python-basic-grammar", "python-control",
    {
      title: "2.3 Python数据类型",
      path: "type-of-data",
      collapsable: false,
      children: ["num-data", "str-data", "bytearray-data", "list-tuple-data", "set-dict-data"],
    },
    ]
  },
  {
    title: "3 函数",
    collapsable: false,
    children: ["python-function", "function-parameter", "action-scope"]
  },
  {
    title: "4 高级特性",
    collapsable: false,
    children: ["python-linear-data-structure", "python-analytic-expre"]
  },
  {
    title: "5 函数式编程",
    path: "func-prog",
    collapsable: false,
    children: ["high-func", "lambda", "python-decorator"]
  },
  {
    title: "5 模块",
    collapsable: false,
    children: ["python-module-install", "python-setup"]
  },
  "python-dir-file-pro.md",
  "python-serialize.md",
  "python-exception.md",
  "python-oo-package.md",
  "python-oo-inher-pol.md",
  "python-magic.md",
  "python-thread.md",
  "python-thread-sync.md",
  "python-gil-multiprocessing.md",
  "python-tcp-pg.md",
  "python-socketserver.md",
  "python-io-model.md",
  "python-instance",
]