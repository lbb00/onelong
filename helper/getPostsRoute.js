import glob from 'glob'

export default function getPostRoutes() {
  const files = glob.sync('**/*.md', { cwd: 'posts' })
  return files.map(post => {
    const slug = post.substr(0, post.lastIndexOf('.'))
    return {
      route: `/post/${slug}`
    }
  })
}
