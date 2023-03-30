---
title: Markdown 语法
---

# Markdown 语法 & 展示

[[toc]]

## 基础语法展示

### 表情符号

:v:

:joy:

### 引用

> 引用 111

### 链接

跳转至 [进阶语法展示](./#two)

跳转至 [哔哩哔哩](https://www.bilibili.com)

跳转至 [其他页面](./guide/index.md)

### 表格

GitHub 风格的表格

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## 进阶语法展示 {#two}

### 额外信息

::: info 标题
这是一个信息框
:::

::: tip
这是一个提示框
:::

::: warning 警告
这是一个警告提示框
:::

::: danger
这是一个危险的、错误的警告提示框
:::

::: details
这是一个可折叠的内容框

```jsx
const a = 123;
```

:::

### 代码块 - 高亮

```jsx
const name = "郝玉娟";
```

```html {1-3,5}
<div>box 容器 - 高亮突出第 1-3 行</div>

<span>突出第 5 行</span>

<span>通过注释突出这一行</span> // [!code hl]
```

```vue {1,4}
<script step></script>

<template>
  <div>vue 容器 - 高亮突出第 1, 4 行</div>
</template>
```

### 代码块 - 辅助色 & 专注模式

```js
function _uni() {
  let a = 123;
  console.log("专注代码块: 通过注释只突出这一行代码，模糊其他代码"); // [!code focus]
  return a;
}
```

```js
function _uni() {
  console.log("彩色代码块，用于描述代码中的差异");
  let a = false; // [!code --]
  let a = true; // [!code ++]

  const error = "错误色彩代码块"; // [!code error]
  const warning = "警告色彩代码块"; // [!code warning]

  return a;
}
```

### 导入代码

<<< @/.vitepress/config.ts{4}

<<< @/.vitepress/config.ts#vitepress{4}

### 代码组

:::code-group

```bash [YARN]
yarn add sass -D
```

```bash [NPM]
npm install sass -D
```

:::

### 标签

文字 <Badge type="info">custom element</Badge>

文字 <Badge type="tip" text="^1.9.0" />

文字 <Badge type="warning" text="beta" />

提醒 <Badge type="danger" text="caution" />
