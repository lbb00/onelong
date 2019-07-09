import { getPosts } from './helper/posts'
import head from './head'
export default {
  mode: 'universal',
  modern: 'client',
  head: head,
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  generate: {
    routes: async () => {
      const posts = await getPosts()
      return posts
    }
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/eslint-module'],
  axios: {},
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      })
    }
  }
}
