<script setup>
import Welcome from './Welcome.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => {
  router.push('/welcome')
}
</script>

<template>
  <h1>登录</h1>
  <Welcome msg="欢迎"></Welcome>
  <el-button @click="goHome">返回首页</el-button>
</template>

<style scoped>
</style>
