<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  },
})

interface Post {
  id: string
  title: string
  content: string
}
const { id } = useRoute().params
const { data: post } = await useFetch<Post>(`https://api.vercel.app/blog/${id}`)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}
</script>

<template>
  <h1>{{ post?.title }}</h1>
  <p>{{ post?.content }}</p>
</template>