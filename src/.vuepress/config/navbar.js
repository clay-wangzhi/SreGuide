const { navbarConfig } = require("vuepress-theme-hope");

module.exports = {
  zh: navbarConfig([
    { text: "博客主页", link: "/", icon: "home" },
    {
      text: "推荐教程",
      icon: "software",
      items: [
        { text: "Shell", icon: "shell", link: "/code/shell/" },
      ],
    },
    {
      text: "学习笔记",
      icon: "code",
      items: [
        {
          text: "编程语言",
          items: [
            { text: "Python", icon: "python", link: "/code/python/" },
          ],
        },
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