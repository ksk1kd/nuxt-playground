<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  },
})
const route = useRoute()
</script>

<template>
  <h1>Blog {{ route.params.id }}</h1>
</template>