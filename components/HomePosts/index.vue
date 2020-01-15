<template lang="pug">
  section.home-posts
    h2.title 最近文章
    ul.list
      li(v-for='post in posts')
        nuxt-link(:to='getPostLink(post.id)')
          div.post
            h3 {{post.name}}

    div.more
      nuxt-link(to='/post') More...
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getPostLink(postId) {
      return `post/${this.posts[postId].path}`
    }
  }
}
</script>

<style lang="scss">
.home-posts {
  margin-top: 40px;
  padding: 0 60px;
  .title {
    font-weight: 500;
    font-size: 24px;
  }
  .list {
    display: flex;

    margin-left: -20px;
    li {
      display: block;
      flex: 1 0 0;

      margin: 20px 0 0 20px;
      padding: 20px 16px;

      border-radius: 4px;
      box-shadow: 2px 2px 6px #f2f2f2;
      cursor: pointer;

      transition: transform 0.2s ease-in-out;
      &:hover {
        background: #fafafa;
        transform: scaleY(1.15) scaleX(1.05);
      }
      > a {
        display: block;

        height: 100%;

        color: #333;
      }
      h2 {
        font-weight: 500;
      }
    }
  }
  .more {
    display: flex;
    justify-content: center;

    margin-top: 20px;

    a {
      padding: 5px 10px;

      text-align: center;
    }
  }
}
</style>
