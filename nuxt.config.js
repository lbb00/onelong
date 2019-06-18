import glob from 'glob'

export default {
  mode: 'universal',
  head: {
    title: 'onelong',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '可能是个无趣的人吧,曹云龙,软件工程师'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  generate: {
    routes() {
      const files = glob.sync('**/*.md', { cwd: 'posts' })
      return files.map((post, _) => {
        const slug = post.substr(0, post.lastIndexOf('.'))
        return `/post/${slug}`
      })
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
