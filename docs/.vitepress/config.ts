import { defineConfig } from "vitepress";

// https://vitepress.vuejs.org/config/app-configs

// #region vitepress
export default defineConfig({
  title: "Vino",
  description: "基于 Vue3 实现的自定义组件",
  logo: "",
  siteTitle: false,

  // 这里的配置都是全局生效
  themeConfig: {
    // 顶部导航
    nav: [
      { text: "Markdown 语法", link: "/markdown/" },
      { text: "组件", link: "/components/" },
      // 加入 items，会形成一个含有下拉框的导航，target 定义跳转方式，rel 定义链接和当前文档的关系
      //   { text: "", items: [], target: '', rel: '' },
    ],

    // 侧边栏配置（只定义一个的话，会全局生效，是个数组类型）
    // sidebar: [],

    // 定义多个侧边栏，是个对象类型
    sidebar: {
      "/components/": [
        {
          text: "组件", // 第一级的 text 是菜单分组标题
          // items 支持嵌套，最多嵌套 6 层
          items: [
            { text: "菜单1", link: "" },
            { text: "菜单2", link: "" },
          ],
        },
        // {
        //   text: "组件111", // 第一级的 text 是菜单分组标题
        //   //   collapsed: false, // TODO 目前无效
        //   // items 支持嵌套，最多嵌套 6 层
        //   items: [
        //     { text: "菜单1", link: "" },
        //     { text: "菜单2", link: "" },
        //     { text: "菜单3", link: "" },
        //     { text: "菜单4", link: "" },
        //     { text: "菜单5", link: "" },
        //     { text: "菜单6", link: "" },
        //     { text: "菜单7", link: "" },
        //     { text: "菜单8", link: "" },
        //   ],
        // },
      ],
    },

    // 大纲的标题可显示范围（可以使用 frontmatter 单独对页面配置）
    outline: [1, 3],

    // 右侧大纲标题（全局）
    outlineTitle: "On this page",

    // 社交链接，会显示在顶部右上角
    socialLinks: [
      //   { icon: "discord", link: "" },
      //   { icon: "facebook", link: "" },
      { icon: "github", link: "" },
      //   { icon: "instagram", link: "" },
      //   { icon: "linkedin", link: "" },
      //   { icon: "slack", link: "" },
      //   { icon: "twitter", link: "" },
      //   { icon: "youtube", link: "" },
      //   { icon: { svg: "" }, link: "" },
    ],

    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },

    // 编辑此页的配置项，为 false 时禁用此项（可以使用 frontmatter 单独对页面配置）
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path", // 地址，可以是一个回调
      text: "Edit this page on GitHub",
    },

    // 最后更新时间的 前缀文字
    lastUpdatedText: "Updated Date",

    // TODO 全局搜索（需要 DocSearch 账号）
    // algolia: {},

    // 文档的页脚，也就是 上一页 / 下一页 的文字，为 false 时隐藏此项（可以使用 frontmatter 单独对页面配置）
    docFooter: {
      prev: "Previous page",
      next: "Next page",
    },
  },
});
// #endregion vitepress
