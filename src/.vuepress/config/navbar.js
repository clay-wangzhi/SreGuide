const { navbarConfig } = require("vuepress-theme-hope");

module.exports = {
  zh: navbarConfig([
    { text: "博客主页", link: "/", icon: "home" },
    {
      text: "编程语言",
      icon: "code",
      items: [
        { text: "Shell", icon: "shell", link: "/code/shell/" },
        { text: "Python", icon: "python", link: "/code/python/" },
        { text: "Golang", icon: "golang", link: "/code/golang/" },
      ]
    },
    {
      text: "云原生",
      icon: "yunyuanshengpingtai",
      items: [
        { text: "Docker", icon: "docker", link: "/cloudnative/docker/" },
        { text: "Kubernetes", icon: "kubernetes", link: "/cloudnative/kubernetes/" },
      ],
    },
    {
      text: "监控工具",
      icon: "jiankong",
      items: [
        { text: "Zabbix", icon: "zabbix1", link: "/monitor/zabbix/" },
        { text: "ELK", icon: "elastic", link: "/monitor/elk/" },
      ],      
    },
    {
      text: "自动化工具",
      icon: "devops",
      items: [
        { text: "Ansible", icon: "ansible", link: "/automate/ansible/" },
      ],
    },
    {
      text: "web中间件",
      icon: "webkuangjia",
      items: [
        { text: "Nginx", icon: "nginx", link: "/web/nginx/" },
      ],
    },
    {
      text: "数据库",
      icon: "shujuku",
      items: [
        { text: "MySQL", icon: "mysql", link: "/db/mysql/" },
        { text: "Redis", icon: "redis", link: "/db/redis/" },
      ],
    },
    { text: "Linux", icon: "linux", link: "/linux/basic/" },
  ]),
}