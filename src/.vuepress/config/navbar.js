const { navbarConfig } = require("vuepress-theme-hope");

module.exports = {
  zh: navbarConfig([
    { text: "博客主页", link: "/", icon: "home" },
    {text: "基础知识",
      icon: "jichu",
      items: [
        { text: "操作系统", icon:"caozuoxitong", link: "/basic/system/" },
        { text: "计算机网络", icon:"wangluo", link: "/basic/network/" },
      ]
    },
    {
      text: "编程语言",
      icon: "code",
      items: [
        { text: "Shell", icon: "shell", link: "/code/shell/" },
        { text: "Python", icon: "python", link: "/code/python/" },
        { text: "Golang", icon: "golang", link: "/code/golang/" },
        { text: "前端开发", icon: "vue", link: "/code/frontend/" },
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
        { text: "Prometheus", icon: "prometheus", link: "/monitor/prometheus/" },
        { text: "Grafana", icon: "grafana", link: "/monitor/grafana/" },
      ],      
    },
    {
      text: "自动化工具",
      icon: "devops",
      items: [
        { text: "Gitlab", icon: "gitlab", link: "/automate/gitlab/" },
        { text: "Jenkins", icon: "jenkins", link: "/automate/jenkins/" },
        { text: "Ansible", icon: "ansible", link: "/automate/ansible/" },
      ],
    },
    {
      text: "web中间件",
      icon: "webkuangjia",
      items: [
        { text: "Nginx", icon: "nginx", link: "/web/nginx/" },
        { text: "Tomcat", icon: "tomcat", link: "/web/tomcat/" },
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