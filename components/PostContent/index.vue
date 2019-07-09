<template lang="pug">
article.post.markdown-css(v-html='content')
</template>

<script>
export default {
  name: 'PostContent',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import 'highlight.js/styles/atom-one-dark.css';
@import '../../assets/style/markdown.scss';
.post {
  box-sizing: border-box;
  width: 92%;
  margin: 0 auto;
}
@media screen and (max-width: 1200px) {
  .markdown-css {
    font-size: 14px;
    padding: 16px 20px;
  }
  .post {
    width: 100%;
  }
}
</style>
