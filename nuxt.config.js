import getPostRoutes from './helper/getPostsRoute'
import head from './head'
export default {
  mode: 'universal',
  modern: 'client',
  head: head,
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  generate: {
    routes: () => {
      return getPostRoutes()
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
