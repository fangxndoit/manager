<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <router-link to="/login">去登录</router-link>
</template>

<style scoped>
</style>
