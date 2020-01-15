<template lang="pug">
header.the-header
  div.tip FBI Warning: 网站还在施工中喔！☆(￣▽￣)/
  nav
    ul.nav
      li
        nuxt-link(to='/') 首页
      li
        nuxt-link(to='/post') 文章
      li
        a(href='https://github.com/loveonelong' target='__blank') Github
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.the-header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;

  background: #fff;
  .tip {
    height: 50px;

    font-weight: 600;
    line-height: 50px;
    text-align: center;
    color: rgb(252, 77, 34);
  }
  .nav {
    display: flex;

    font-weight: 500;
    > li {
      margin: 1em;
    }
    a {
      color: #333;
    }
  }
}
</style>
