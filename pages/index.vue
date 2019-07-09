<template lang="pug">
div
  HomeScreen
  section
    h2 文章
    ul
      li
  HomeStockPositions(:positions='positions')
</template>

<script>
import HomeScreen from '@/components/HomeScreen'
import HomeStockPositions from '@/components/HomeStockPositions'

const positionsData = [
  {
    name: '东阿阿胶',
    symbol: '000423',
    industry: '医药'
  },
  {
    name: '双汇发展',
    symbol: '000895',
    industry: '食品'
  },
  {
    name: '华东医药',
    symbol: '000963',
    industry: '医药'
  },
  {
    name: '分众传媒',
    symbol: '002027',
    industry: '传媒'
  },
  {
    name: '三全食品',
    symbol: '002216',
    industry: '食品'
  },
  {
    name: '顺丰控股',
    symbol: '002352',
    industry: '快递'
  },
  {
    name: '康美',
    symbol: '600518',
    industry: '医药'
  },
  {
    name: '华域汽车',
    symbol: '600741',
    industry: '汽车'
  },
  {
    name: '山西汾酒',
    symbol: '600809',
    industry: '食品'
  },
  {
    name: '伊利股份',
    symbol: '600887',
    industry: '食品'
  },
  {
    name: '中国汽研',
    symbol: '601965',
    industry: '汽车'
  },
  {
    name: '中国核电',
    symbol: '601985',
    industry: '能源'
  },
  {
    name: '四方科技',
    symbol: '603339',
    industry: '冷链'
  },
  {
    name: '美诺华',
    symbol: '603538',
    industry: '医药'
  },
  {
    name: '飞科电器',
    symbol: '603868',
    industry: '家用电器'
  },
  {
    name: '吉祥航空',
    symbol: '603835',
    industry: '民航'
  },
  {
    name: '完美世界',
    symbol: '',
    industry: '游戏'
  }
]

export default {
  components: {
    HomeScreen,
    HomeStockPositions
  },
  asyncData() {
    const positions = {}
    positionsData.forEach(item => {
      const industry = item.industry
      if (!positions[industry]) {
        positions[industry] = []
      }
      positions[industry].push(item)
    })
    return { positions }
  }
}
</script>

<style lang="scss"></style>
