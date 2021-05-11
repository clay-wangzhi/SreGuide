const { navbarConfig } = require("vuepress-theme-hope");

module.exports = {
  zh: navbarConfig([
    { text: "博客主页", link: "/", icon: "home" },
    {
      text: "编程语言",
      icon: "code",
      items: [
        { text: "Shell", icon: "shell", link: "/code/shell/" },
      ],
      items: [
        { text: "Python", icon: "python", link: "/code/python/" },
      ],
      items: [
        { text: "Golang", icon: "golang", link: "/code/golang/" },
      ],
    },
    {
      text: "云原生",
      items: [
        { text: "Docker", icon: "docker", link: "/cloudnative/docker/" },
      ],
      items: [
        { text: "Kubernetes", icon: "kubernetes", link: "/cloudnative/kubernetes/" },
      ],
    },
    {
      text: "学习笔记",
      icon: "code",
      items: [,
        {
          text: "web中间件",
          items: [
            { text: "Nginx", icon: "nginx", link: "/web/nginx/" },
          ],
        },
        {
          text: "自动化工具",
          items: [
            { text: "Ansible", icon: "ansible", link: "/automate/ansible/" },
          ],
        },
        {
          text: "监控工具",
          items: [
            { text: "Zabbix", icon: "zabbix", link: "/monitor/zabbix/" },
            { text: "ELK", icon: "elastic", link: "/monitor/elk/" },
          ],
        },
        {
          text: "数据库",
          items: [
            { text: "MySQL", icon: "mysql", link: "/db/mysql/" },
            { text: "Redis", icon: "redis", link: "/db/redis/" },
          ],
        },
        {
          text: "Linux",
          items: [
            { text: "Linux", icon: "linux", link: "/linux/basic/" },
          ],
        },
      ],
    },
  ]),
}