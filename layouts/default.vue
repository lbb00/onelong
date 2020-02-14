<template lang="pug">
div.light
  TheHeader
  main.main
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
@import '../assets/style/var.scss';
* {
  box-sizing: border-box;
}
.light {
  position: relative;

  font-size: 1.4rem;

  background: $main-bg;
}

.main {
  padding: 0 4vw;

  color: $main-black;
}
a,
a:hover,
a:visited,
a:link,
a:active {
  color: $main-color;
  text-decoration: none;
}
</style>
