<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <h1>Blog {{ route.params.id }}</h1>
</template>