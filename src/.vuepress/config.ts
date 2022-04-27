import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "zh-CN",
  title: "SRE运维进阶之路",
  description: "Keep Learning",

  base: "/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2541777_75xscujk71.css",
      },
    ],
  ],
  themeConfig,
});
