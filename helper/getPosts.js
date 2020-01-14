export default function getPosts() {
  const resolve = require.context('~/posts/', true, /\.md$/)
  const posts = resolve.keys().map((key, index) => {
    const [, name] = key.match(/.+\/(.+).md$/)
    const [, path] = key.match(/\/(.+).md$/)
    return {
      id: index,
      name: name,
      path
    }
  })
  return posts
}
