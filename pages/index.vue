<script setup lang="ts">
interface Datetime {
  st: number
}

const { data: datetime, refresh } = await useFetch<Datetime>(
  'https://3fe5a5f690efc790d4764f1c528a4ebb89fa4168.nict.go.jp/cgi-bin/json',
)
</script>

<template>
  <h1>Home</h1>
  <p>現在時刻: {{ new Date(datetime?.st ? datetime.st * 1000 : 0) }}</p>
  <button @click="() => refresh()">現在時刻を更新</button>
</template>
