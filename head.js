export default {
  title: 'onelong',
  meta: [
    { charset: 'utf-8' },

    /* render */
    // 使用最新的版本
    { ' http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
    // 360浏览器的极速模式(webkit)
    { name: 'renderer', content: 'webkit' },
    // uc 强制竖屏
    { name: 'screen-orientation', content: 'portrait' },
    // qq 强制竖屏
    { name: 'x5-orientation', content: 'portrait' },
    // 禁止缩放
    {
      name: 'viewport',
      content:
        'width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover'
    },
    // 忽略页面中的数字识别为电话，忽略email识别
    {
      name: 'format-detection',
      content: 'telphone=no, email=no'
    },

    /* seo */
    {
      hid: 'description',
      name: 'description',
      content: '可能是个无趣的人吧,曹云龙,软件工程师'
    },
    {
      name: 'keywords',
      content: ''
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
}
