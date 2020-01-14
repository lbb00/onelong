<template lang="pug">
header
  nav
    ul.nav
      li
        nuxt-link(to='/') 首页
      li
        nuxt-link(to='/post') 文章
      li
        a(href='https://github.com/loveonelong') Github
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
.nav {
  display: flex;
  > li {
    margin: 1em;
  }
}
</style>
