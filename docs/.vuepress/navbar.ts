import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "学习路线",
    icon: "roadmap",
    link: "/roadmap/"
  },
  {
    text: "进阶之路",
    icon: "upup",
    link: "/summary"
  },
  {
    text: "网站相关",
    icon: "info",
    children: [
      { text: "关于作者", icon: "people", link: "/" },
      { text: "更新历史", icon: "lishi", link: "/timeline/" },
    ],
  },
  {
    text: "友链",
    icon: "friend",
    link: "/friends/"
  },
]);
