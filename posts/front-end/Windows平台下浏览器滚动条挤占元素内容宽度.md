---
date: 2019-06-24
auth: onelong
---

# Windows 平台下浏览器滚动条挤占元素内容宽度

## 案例

有如下布局，`content__item`并没有按照想象中两两并排的方式排列。在 Windows 平台下，打开控制台可以发现滚动条占据了`scroll-box`的宽度，滚动条宽度大概为 17px。

```html
<div class="scroll-box">
  <div class="content">
    <div class="content__item"></div>
    <div class="content__item"></div>
  </div>
</div>

<style>
  .scroll-box {
    height: 500px;
    width: 300px;
    overflow-y: scroll;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    height: 1024px;
    background: blue;
  }

  .content > div {
    margin-top: 10px;
    width: 48%;
    height: 120px;
    background: red;
  }
</style>
```

## 解决方案

### （推荐）滚动区域内部增加一层 wrap

案例结构修改为如下：

```html
<div class="scroll-box">
  <div class="wrap">
    <div class="content">
      <div class="content__item"></div>
      <div class="content__item"></div>
    </div>
  </div>
</div>

<style>
  .scroll-box {
    display: inline-block;
    height: 500px;
    overflow-y: scroll;
  }

  .wrap {
    width: 300px;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    height: 1024px;
    background: blue;
  }

  .content > div {
    margin-top: 10px;
    width: 48%;
    height: 120px;
    background: red;
  }
</style>
```

把原本设置在`scroll-box`上的宽度设置在`scroll-box__wrap`上，并将`scroll-bar`设置为`display: inline-block`。`scroll-box`的宽度会自适应为 `scroll-box__wrap的宽度 + 滚动条宽度`。

这样方案的优点是可以避免不同平台滚动条样式不一致难兼容的问题，但带来的问题是`scroll-box`的宽度不能很精准的得知。由于已知 windows 平台下滚动条是最宽的，所以大致可以预估为 `scroll-box__wrap的宽度 < scroll-box的宽度 < scroll-box__wrap的宽度 + 17px`。

### 使用`overflow: overlay`

overflow 有一个处于实验中的属性`overlay`。

> 行为与 auto 相同，但滚动条绘制在内容之上而不是占用空间。 仅在基于 WebKit（例如，Safari）和基于 Blink 的（例如，Chrome 或 Opera）浏览器中受支持。

这种方案相比上一种方案的有点是不会多占据内容，但会有一些显示效果问题。比如，Windows 下滚动条的宽度比较宽，且滚动条滑轨不透明，如果有内容恰好位于滚动条所处的位置，会被覆盖。

可以通过 CSS 修改 scroll-bar 的样式来优化滚动条显示效果（可以参考 mac 下的滚动条效果），缺点是 scroll-bar 不同浏览器兼容不一致，写法较为繁琐。

```html
<div class="scroll-box">
  <div class="content">
    <div class="content__item"></div>
    <div class="content__item"></div>
  </div>
</div>

<style>
  .scroll-box {
    width: 300px;
    height: 500px;
    overflow-y: overlay;
  }

  /* 设置滚动条样式 */
  .scroll-box::-webkit-scrollbar {}
  .scroll-box::-o-scrollbar {}
  /* ... 代码省略 */

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    height: 1024px;
    background: blue;
  }

  .content > div {
    margin-top: 10px;
    width: 48%;
    height: 120px;
    background: red;
  }
</style>
```
