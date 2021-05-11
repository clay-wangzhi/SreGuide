module.exports = [
  "",
  "redis-slave",
  "server-client",
  {
    title: "数据库操作",
    collapsable: false,
    children: ["operate/string", "operate/key", "operate/hash", "operate/list", "operate/set", "operate/zset", ]
  },
  "redis-dump",
  "ruby-update",
  "qa",
]