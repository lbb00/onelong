<template lang="pug">
div.main.light
  TheHeader
  nuxt
  TheFooter
</template>
<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<style lang="scss">
@import '../assets/style/rest.css';
* {
  box-sizing: border-box;
}
.main {
  position: relative;

  min-height: 100vh;
}
a,
a:hover,
a:visited,
a:link,
a:active {
  color: #088fcd;
  text-decoration: none;
}
</style>
