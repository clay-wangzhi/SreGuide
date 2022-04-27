import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import { sidebarConfig } from "./sidebar";

export default defineThemeConfig({
  hostname: "https://clay-wangzhi.com",

  author: {
    name: "Clay",
    url: "https://clay-wangzhi.com",
  },

  iconPrefix: "iconfont icon-",

  logo: "/lufei.jpg",

  repo: "https://github.com/clay-wangzhi/wiki",

  docsDir: "src",

  docsBranch: "master",

  pure: true,

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebarConfig,

  footer: '<a href="http://beian.miit.gov.cn/" target="_blank">备案号:冀ICP备2021007336号</a>',

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    intro: "/intro/",
    sidebarDisplay: "mobile",
    medias: {
      Wechat: "https://clay-wangzhi.com/wechat.jpg",
      Email: "mailto:clay_wangzhi@163.com",
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    docsearch: {
      appId: "7KISWN5OHG",
      apiKey: "6c1bbe311321e4d1c0596978f5cabad9",
      indexName: "clay-wangzhi",
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
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
                openIssueText: "你认为该查询应该有结果？",
                openIssueLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
