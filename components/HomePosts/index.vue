<template lang="pug">
  section.home-posts
    div.home-posts__list
      HomePostCard(v-for='post in posts' :post='post' :key='post.name')
    div.home-posts__more
      nuxt-link(to='/post') More...
</template>

<script>
import HomePostCard from '@/components/HomePostCard'
export default {
  components: { HomePostCard },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.home-posts {
  margin-top: 35vh;
  &__list {
    position: relative;

    display: flex;
    flex-wrap: wrap;

    margin: 0 -20px;
    padding: 10px 0 0;
  }
  &__more {
    text-align: center;
  }
}
</style>
