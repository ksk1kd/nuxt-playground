<script setup lang="ts">
interface Post {
  id: string
  title: string
  content: string
}

const { data: posts } = await useFetch<Post[]>('https://api.vercel.app/blog')
</script>

<template>
  <h1>Blog List</h1>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <NuxtLink :to="`/blog/${post.id}`">{{ post.title }}</NuxtLink>
    </li>
  </ul>
</template>
