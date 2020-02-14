<template lang="pug">
div.page-post(:key='$route.params.pathMatch')
  div.page-post__cover
  div.page-post__content
    PostContent(:content='content')
</template>

<script>
import fm from 'front-matter'
import hljs from 'highlight.js'
import PostContent from '@/components/PostContent'

const md = require('markdown-it')({
  html: true,
  typographer: true,
  langPrefix: '',
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre><code class="hljs">' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>'
        )
      } catch (_) {}
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
    )
  }
})

export default {
  components: {
    PostContent
  },
  async asyncData({ params, payload }) {
    try {
      const content = fm(
        (await import(`@/posts/${params.pathMatch}.md`)).default
      )
      return {
        attributes: content.attributes,
        content: md.render(content.body)
      }
    } catch {
      return {
        attributes: {},
        content: null
      }
    }
  },
  created() {
    // Not found [matchPath].md, replace to post list.
    if (this.content === null) {
      this.$router.replace({
        name: 'posts'
      })
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/style/markdown.scss';
@import '~/assets/style/var.scss';
.page-post {
  &__cover {
    height: 50vh;
    margin: 0 -4vw;

    background: $main-grey;
  }
  &__content {
    margin: -40px -4vw 0;
    overflow: hidden;

    background: #fff;
    border-radius: 12px 12px 0 0;
  }
}

@media screen and(min-width: 1024px) {
  .page-post {
    &__content {
      width: 100%;
      margin: -40px 0 0;
    }
  }
}
</style>
