<template lang="pug">
  section.home-stock-positions
    h2.title 股票持仓
    div.list
      div.list__item(v-for='industry in Object.keys(positions)' :key='industry')
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
  margin-top: 40px;
  padding: 0 20px;
  padding: 0 60px;
  .title {
    font-weight: 500;
    font-size: 24px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;

    margin-left: -20px;
    &__item {
      margin: 20px;
    }
  }
}
</style>
