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
    title: "6 模块",
    collapsable: false,
    children: ["python-module-install", "python-setup"]
  },
  {
    title: "7 IO编程",
    collapsable: false,
    children: ["python-dir-file-pro", "python-serialize"]
  },
  {
    title: "8 异常、调试和测试",
    collapsable: false,
    children: ["python-exception"]
  },
  {
    title: "9 面向对象编程",
    collapsable: false,
    children: ["python-oo-package", "access-control", "python-oo-inher-pol"]
  },
  {
    title: "10 进程和线程",
    path: "process-thread",
    collapsable: false,
    children: ["python-gil-multiprocessing", "python-thread"]
  },
  "python-magic.md",
  "python-thread-sync.md",
  "python-tcp-pg.md",
  "python-socketserver.md",
  "python-io-model.md",
  "python-instance",
]