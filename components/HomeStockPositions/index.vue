<template lang="pug">
  section.home-stock-positions
    h2 股票持仓
    div.home-stock-positions__list
      div.home-stock-positions__list__item(v-for='industry in Object.keys(positions)' :key='industry')
        h3 {{industry}}
        ul
          li(v-for='item in positions[industry]' :key='item.symbol')
            p
              span {{item.name}}
              span &nbsp;
              span {{item.symbol}}


</template>

<script>
export default {
  name: 'HomeStock',
  components: {},
  props: {
    positions: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.home-stock-positions {
  padding: 0 20px;
  &__list {
    display: flex;
    flex-wrap: wrap;
    &__item {
      margin: 20px;
    }
  }
}
</style>
