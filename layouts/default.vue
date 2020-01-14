<template lang="pug">
div.light
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
</style>
