<template lang="pug">
div
  ul
    li(v-for='postObj in posts')
      nuxt-link(:to='getPostLink(postObj.id)') {{postObj.name}}
</template>

<script>
import getPosts from '~/helper/getPosts'

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
  asyncData() {
    return {
      posts: getPosts()
    }
  },
  created() {},
  mounted() {},
  methods: {
    getPostLink(postId) {
      return `post/${this.posts[postId].path}`
    }
  }
}
</script>

<style lang="scss"></style>
