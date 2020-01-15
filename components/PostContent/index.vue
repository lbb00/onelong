<template lang="pug">
article.post-content.markdown-css(v-html='content')
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
.post-content {
  box-sizing: border-box;
  width: 92%;
  margin: 0 auto;
}
@media screen and (max-width: 1200px) {
  .markdown-css {
    padding: 16px 20px;

    font-size: 14px;
  }
  .post-content {
    width: 100%;
  }
}
</style>
