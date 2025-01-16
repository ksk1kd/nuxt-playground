// https://nuxt.com/docs/api/configuration/nuxt-config
interface Post {
  id: string
  title: string
  content: string
}

export default defineNuxtConfig({
  hooks: {
    async 'prerender:routes'(ctx) {
      const posts: Post[] = await fetch('https://api.vercel.app/blog').then(
        (res) => res.json(),
      )
      posts.map((post) => {
        ctx.routes.add(`/blog/${post.id}`)
      })
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
})
