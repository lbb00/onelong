# 配置 PosstCss & 移动端`vw`适配

## 推荐配置

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    /* Assets */
    'postcss-import': {},
    'postcss-url': {},

    /* Utils */
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false
    },

    /* Feature */
    'postcss-preset-env': {
      autoprefixer: false
    },

    /* Only H5 */
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore'],
      minPixelValue: 2, // ios对于小于1px的border不显示
      mediaQuery: false
    },

    /* Minify */
    cssnano: {
      'cssnano-preset-advanced': {
        zindex: false
      }
    },

    /* Bugs */
    'postcss-flexbugs-fixes': {}
  }
}
```

```bash
npm i \
postcss-import \
postcss-url \
postcss-aspect-ratio-mini \
postcss-write-svg \
postcss-preset-env \
postcss-px-to-viewport \
cssnano \
cssnano-preset-advanced \
postcss-flexbugs-fixes \
--save-dev
```

## 解释

### Assets

处理资源路径，vue 配置了 vue-loader 可以不用。

- [postcss-import](https://github.com/postcss/postcss-import)
- [postcss-url](https://github.com/postcss/postcss-url)

### Utils

- [postcss-aspect-ratio-mini](https://github.com/yisibl/postcss-aspect-ratio-mini)
- [postcss-write-svg](https://github.com/jonathantneal/postcss-write-svg)

### Feature

- [postcss-preset-env](https://preset-env.cssdb.org/)

### Minify

- [cssnano](https://cssnano.co/)

### Bugs

- [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes)

## Refer

- [【转】大漠 | 分享手淘过年项目中采用到的前端技术](https://juejin.im/entry/5a9550e66fb9a0633f0e488a)
