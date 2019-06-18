<template lang="pug">
div(:key='$route.params.pathMatch')
  div.title {{ attributes.title }}
  div.subtitle
    | Published on {{attributes.ctime}}
    | by {{ attributes.author }}
  PostContent(:content='content')

</template>

<script>
import fm from 'front-matter'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'

import PostContent from '@/components/PostContent'
hljs.registerLanguage('javascript', javascript)

const md = require('markdown-it')({
  html: true,
  typographer: true,
  langPrefix: '',
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
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
  async asyncData({ params }) {
    try {
      const fileContent = await import(`@/posts/${params.pathMatch}.md`)
      const res = fm(fileContent.default)
      return {
        attributes: res.attributes,
        content: md.render(res.body)
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
