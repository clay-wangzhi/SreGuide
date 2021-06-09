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
  "python-ha-tables-analytic-expre.md",
  "python-function.md",
  "python-decorator.md",
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