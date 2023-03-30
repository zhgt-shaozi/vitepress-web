---
layout: home
title: Vue-Components
titleTemplate: 基于 Vue3 实现的一些自定义组件
description: 基于 Vue3 实现的一些自定义组件

## 首页配置
hero:
  name: Vino # 标题
  text: 基于 Vue3 实现的自定义组件 # 主描述
  tagline: 没啥特点，只供学习使用 # 描述
  image: # 首页 logo / 图片
    src: /logo.png
    alt: Vino
  actions: # 操作按钮
    - theme: brand # 按钮主题，有 brand / alt / 自定义（会生成类名）
      text: 查看组件 # 按钮文字
      link: /components/ # 按钮链接
    - theme: alt
      text: 在 Github 上查看
      link: https://gitee.com/geeksdidi/kittyui

## 功能特点
features:
  - icon: 💡 # 图标可以为一个 icon 或一个 对象
    title: Vue3 组件库 # 标题
    details: 基于 vite 打包和 TypeScript 开发 # 描述
  - icon: 📦
    title: 仅供学习使用
    details: 倾向于 Vue3 组件库的学习，请勿用于实际生产项目
  - icon: 🛠️
    ## icon 为对象时的配置项
    # icon:
    #   src: 图标地址
    #   dark: 暗黑模式下的图标地址，可替代 src
    #   light: 明亮模式下的图标地址，可替代 src
    #   alt: 图片不加载时的说明
    #   width: 图片宽度
    #   height: 图片高度
    title: 按需引入
    details: 直接支持按需引入无需配置任何插件。
---
