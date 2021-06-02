module.exports = [
  "",
  "install",
  "build-tools",
  "user-auth",
  {
    title: "日常维护",
    // path: "ad-hoc/",
    collapsable: false,
    children: ["migrate-job",]
  },
  {
    title: "流水线核心语法",
    // path: "ad-hoc/",
    collapsable: false,
    children: ["jenkins-shared-library", "dingding-plugin", "pipeline-example"]
  },
]