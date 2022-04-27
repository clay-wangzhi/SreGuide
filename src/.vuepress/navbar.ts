import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  {
    text: "云原生",
    icon: "yunyuanshengpingtai",
    link: "cloudnative"
  },
  {
    text: "基础知识",
    icon: "jichu",
    link: "/basic/"
  },
  {
    text: "编程语言",
    icon: "code",
    children: [
      { text: "Shell", icon: "shell", link: "/code/shell/" },
      { text: "Python", icon: "python", link: "/code/python/" },
      { text: "Golang", icon: "golang", link: "/code/golang/" },
      { text: "前端开发", icon: "vue", link: "/code/frontend/" },
    ]
  },
  {
    text: "监控工具",
    icon: "jiankong",
    children: [
      { text: "Zabbix", icon: "zabbix1", link: "/monitor/zabbix/" },
      { text: "ELK", icon: "elastic", link: "/monitor/elk/" },
      { text: "Prometheus", icon: "prometheus", link: "/monitor/prometheus/" },
      { text: "Grafana", icon: "grafana", link: "/monitor/grafana/" },
    ],      
  },
  {
    text: "自动化工具",
    icon: "devops",
    children: [
      { text: "Jenkins", icon: "jenkins", link: "/automate/jenkins/" },
      { text: "Ansible", icon: "ansible", link: "/automate/ansible/" },
    ]
  },
  {
    text: "web中间件",
    icon: "webkuangjia",
    children: [
      { text: "Nginx", icon: "nginx", link: "/web/nginx/" },
      { text: "Tomcat", icon: "tomcat", link: "/web/tomcat/" },
    ],
  },
  {
    text: "数据库",
    icon: "shujuku",
    children: [
      { text: "MySQL", icon: "mysql", link: "/db/mysql/" },
      { text: "Redis", icon: "redis", link: "/db/redis/" },
    ],
  },
  { text: "Linux", icon: "linux", link: "/linux/basic/" },
]);
