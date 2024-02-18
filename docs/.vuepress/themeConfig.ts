import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import { sidebarConfig } from "./sidebar";

export default hopeTheme({
  hostname: "https://clay-wangzhi.com",

  author: {
    name: "Clay",
    url: "https://clay-wangzhi.com",
  },

  iconPrefix: "iconfont icon-",

  logo: "/lufei.jpg",

  repo: "https://github.com/clay-wangzhi/SreGuide",

  docsDir: "docs",

  docsBranch: "master",

  // pure: true,
  breadcrumb: false,

  darkmode: "switch",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebarConfig,

  footer: '<a href="http://beian.miit.gov.cn/" target="_blank">备案号:冀ICP备2021007336号</a>',

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word", "ReadingTime"],

  blog: {
    intro: "/intro/",
    sidebarDisplay: "mobile",
    medias: {
      Wechat: "https://clay-wangzhi.com/wechat.jpg",
      Email: "mailto:clay_wangzhi@163.com",
    },
  },

  plugins: {
    blog: true,
    copyright: true,



    mdEnhance: {
      codetabs: true,
      container: false,
      tasklist: true,
      mermaid: true
    },
  },
});
