<template lang="pug">
article.post
  span.post__tag  tag
  h1.post__title  Title
  ul.post__author
    li.post__author__avart
    li {{author || 'onelong'}}
  ul.post__time
    li 1 min reading
    li ·
    li updated 2019.1.1
  div.markdown-css(v-html='content')
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
@import '../../assets/style/var.scss';
.post {
  box-sizing: border-box;
  margin: 30px 20px 0;

  &__tag {
    display: block;

    margin-bottom: 4px;

    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.15em;
    color: $main-tag;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  &__title {
    margin-bottom: 0.5rem;

    font-size: 2.6rem;
  }
  &__author {
    display: flex;
    align-items: center;

    font-weight: 500;
    line-height: 32px;
    &__avart {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      overflow: hidden;

      background: $main-color;
      border-radius: 50%;
    }
  }
  &__time {
    display: flex;
    align-items: center;

    font-weight: 500;
    color: #738a94;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    li {
      margin-right: 5px;
    }
  }
  .markdown-css {
    h1 {
      display: none;
    }
  }
}
</style>
