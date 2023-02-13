<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <div class="welcome">
    <router-link to="/login">去登录</router-link>
  </div>
</template>

<style scoped lang="scss">
.welcome{
}
</style>
