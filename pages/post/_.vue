<template lang="pug">
div(:key='$route.params.pathMatch')
  div.data {{attributes.date}}
  div.update {{attributes.update}}
  div.subtitle
    | by {{ attributes.author }}
  PostContent(:content='content')
  div 如有问题欢迎在Github Issues提问
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
      } catch (__) {}
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
        payload || (await import(`@/posts/${params.pathMatch}.md`)).default
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

@import './markdown.css';
<style lang="scss"></style>
