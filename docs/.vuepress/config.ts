import { defineUserConfig } from "vuepress";
import themeConfig from "./themeConfig";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";


export default defineUserConfig({
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
        href: "//at.alicdn.com/t/c/font_2541777_r6wjqnwd95p.css",
      },
    ],
  ],
  theme: themeConfig,

  plugins: [
    docsearchPlugin({
    appId: "7KISWN5OHG",
    apiKey: "6c1bbe311321e4d1c0596978f5cabad9",
    indexName: "clay-wangzhi",
    locales: {
      "/": {
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },
  }),
  ],
});
