import path from 'path'
import fs from 'fs'
import glob from 'glob'
export async function getPosts() {
  const files = glob.sync('**/*.md', { cwd: 'posts' })
  const routes = []
  await Promise.all(
    files.map(async (post, _) => {
      const slug = post.substr(0, post.lastIndexOf('.'))
      routes.push(await getPost(slug))
    })
  )
  return routes
}

export function getPost(slug) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(path.resolve(__dirname, '../posts'), slug + '.md'),
      { encoding: 'utf-8' },
      (err, data) => {
        if (err) throw err
        resolve({
          route: `/post/${slug}`,
          payload: data.toString()
        })
      }
    )
  })
}
