<script setup>
import Welcome from './Welcome.vue'
import { ref, reactive, onMounted, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';

const { proxy } = getCurrentInstance()
const router = useRouter()
const goHome = () => {
  router.push('/welcome')
}

const store = useStore()

const user = reactive({
  userName: '',
  userPWD: ''
})
const rules = reactive({
  userName: [
    {
      required: true, message: '请输入用户名', trigger: 'blur'
    }
  ],
  userPWD: [
    {
      required: true, message: '请输入密码', trigger: 'blur'
    }
  ]
})

const userForm = ref()

const login = async(formEl) => {
  if(!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      proxy.$api.login(user).then((res)=>{
        store.commit('saveUserInfo', res)
        router.push('/welcome')
      })
    } else {
      console.log('error submit!', fields)
    }
  })

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
  // proxy.$request.get('/login', {name: 'jack'},{mock: true, loading: true}).then((res)=>{
  //   console.log(res)
  // })

  // proxy.$storage.setItem('age',10)
  // console.log(proxy.$storage.getItem('age'))
  // proxy.$storage.clearItem('age')
  // proxy.$storage.clearAll()
})
</script>

<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form ref="userForm" :model="user" :rules="rules" status-icon>
        <div class="title">水星</div>
        <el-form-item prop="userName">
          <el-input type="text" v-model="user.userName" placeholder="用户名">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="userPWD">
          <el-input type="password" v-model="user.userPWD" placeholder="密码">
            <template #prefix>
              <el-icon><View /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login(userForm)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
.login-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9fcff;
  height: 100vh;
  width: 100vw;
  .modal{
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 3px #c7c9cb;
    .title{
      font-size: 38px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .btn-login{
      width: 100%;
    }
  }
}
</style>
