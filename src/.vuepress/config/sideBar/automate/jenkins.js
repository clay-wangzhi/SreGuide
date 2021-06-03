module.exports = [
  "",
  {
    title: "1 Jenkins 简介",
    collapsable: false,
    children: ["cicd", "first"]
  },
  {
    title: "2 安装 Jenkins",
    collapsable: false,
    children: ["yum-install", "war-install", "ansible-install", "docker-install-jenkins"]
  },
  {
    title: "3 使用 Jenkins",
    collapsable: false,
    children: ["userandpermissions", "api"]
  },
  {
    title: "4 流水线核心语法",
    collapsable: false,
    children: ["start-jenkinsfile", "pipelinesyntax", "groovy-simple-tutorial", "jenkins-shared-library", "dingding-plugin", "pipeline-dev-tools", ""]
  },
  "build-tools",
  "user-auth",
  {
    title: "管理 jenkins",
    collapsable: false,
    children: ["restart",]
  },
  {
    title: "日常维护",
    collapsable: false,
    children: ["migrate-job",]
  },
  "qa"
]