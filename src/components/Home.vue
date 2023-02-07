<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>首页</h1>
  <router-view></router-view>
</template>

<style scoped>
</style>
