<template lang="pug">
header
  nav
    ul.nav
      li
        nuxt-link(to='/') 首页
      li
        nuxt-link(to='/posts') 文章
      li
        a(href='https://github.com/loveonelong') Github
</template>

<script>
export default {
  name: '',
  components: {},
  mixins: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
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
