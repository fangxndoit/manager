<script setup>
import Welcome from './Welcome.vue'
import { ref, onMounted, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'

const { proxy } = getCurrentInstance()
const router = useRouter()
const goHome = () => {
  router.push('/welcome')
}


onMounted(()=>{
  // proxy.$request({
  //   method: 'get',
  //   url: '/login',
  //   data: {
  //     name: 'jack'
  //   }
  // }).then((res)=>{
  //   console.log(res)
  // })
  proxy.$request.get('/login', {name: 'jack'},{mock: true, loading: true}).then((res)=>{
    console.log(res)
  })

  // proxy.$storage.setItem('age',10)
  // console.log(proxy.$storage.getItem('age'))
  // proxy.$storage.clearItem('age')
  // proxy.$storage.clearAll()
})
</script>

<template>
  <h1>登录</h1>
  <Welcome msg="欢迎"></Welcome>
  <el-button @click="goHome">返回首页</el-button>
</template>

<style scoped>
</style>
